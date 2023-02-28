import type { Resolvers } from "@/generated/resolvers-types"

export const resolvers: Resolvers = {
    Query: {
        diaries: async (_, __, { prisma, currentUser }) => {
            if (!currentUser) {
                throw new Error("User not logged in.")
            }
            const diaries = await prisma.dairy.findMany({
                orderBy: { createdAt: "desc" },
                include: { user: true },
                where: { userId: currentUser.id },
            })
            return diaries
        },
    },
    Mutation: {
        addDiary: async (_, { content }, { prisma, currentUser }) => {
            if (!currentUser) {
                throw new Error("User not logged in.")
            }
            const diary = await prisma.dairy.create({
                data: { userId: currentUser.id, content },
                include: { user: true },
            })
            return diary
        },
        updateDiary: async (
            _,
            { diaryId, content },
            { prisma, currentUser }
        ) => {
            if (!currentUser) {
                throw new Error("User not logged in.")
            }
            const targetDiary = await prisma.dairy.findUnique({
                where: { id: diaryId },
            })
            if (targetDiary?.userId !== currentUser.id) {
                throw new Error("Invalid user")
            }
            const diary = await prisma.dairy.update({
                where: { id: diaryId },
                data: {
                    ...(content && { content }),
                },
                include: { user: true },
            })
            return diary
        },
        deleteDiary: async (_, { diaryId }, { prisma, currentUser }) => {
            if (!currentUser) {
                throw new Error("User not logged in.")
            }
            const targetDiary = await prisma.dairy.findUnique({
                where: { id: diaryId },
            })
            if (targetDiary?.userId !== currentUser.id) {
                throw new Error("Invalid user")
            }
            const diary = await prisma.dairy.delete({
                where: { id: diaryId },
                include: { user: true },
            })
            return diary
        },
    },
}
