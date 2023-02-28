import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: any;
};

export type Diary = {
  __typename?: 'Diary';
  content: Scalars['String'];
  createdAt: Scalars['String'];
  id: Scalars['ID'];
  updatedAt: Scalars['String'];
  user: User;
  userId: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  addDiary: Diary;
  deleteDiary: Diary;
  updateDiary: Diary;
};


export type MutationAddDiaryArgs = {
  content: Scalars['String'];
};


export type MutationDeleteDiaryArgs = {
  diaryId: Scalars['String'];
};


export type MutationUpdateDiaryArgs = {
  content: Scalars['String'];
  diaryId: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  diaries: Array<Diary>;
};

export type User = {
  __typename?: 'User';
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
};

export type DiaryFragmentFragment = { __typename?: 'Diary', id: string, content: string, createdAt: string, updatedAt: string, user: { __typename?: 'User', id?: string | null, name?: string | null, email?: string | null } };

export type DiariesQueryVariables = Exact<{ [key: string]: never; }>;


export type DiariesQuery = { __typename?: 'Query', diaries: Array<{ __typename?: 'Diary', id: string, content: string, createdAt: string, updatedAt: string, user: { __typename?: 'User', id?: string | null, name?: string | null, email?: string | null } }> };

export type AddDiaryMutationVariables = Exact<{
  content: Scalars['String'];
}>;


export type AddDiaryMutation = { __typename?: 'Mutation', addDiary: { __typename?: 'Diary', id: string, content: string, createdAt: string, updatedAt: string, user: { __typename?: 'User', id?: string | null, name?: string | null, email?: string | null } } };

export type UpdateDiaryMutationVariables = Exact<{
  diaryId: Scalars['String'];
  content: Scalars['String'];
}>;


export type UpdateDiaryMutation = { __typename?: 'Mutation', updateDiary: { __typename?: 'Diary', id: string, content: string, createdAt: string, updatedAt: string, user: { __typename?: 'User', id?: string | null, name?: string | null, email?: string | null } } };

export type DeleteDiaryMutationVariables = Exact<{
  diaryId: Scalars['String'];
}>;


export type DeleteDiaryMutation = { __typename?: 'Mutation', deleteDiary: { __typename?: 'Diary', id: string, content: string, createdAt: string, updatedAt: string, user: { __typename?: 'User', id?: string | null, name?: string | null, email?: string | null } } };

export type UserFragmentFragment = { __typename?: 'User', id?: string | null, name?: string | null, email?: string | null };

export const UserFragmentFragmentDoc = gql`
    fragment UserFragment on User {
  id
  name
  email
}
    `;
export const DiaryFragmentFragmentDoc = gql`
    fragment DiaryFragment on Diary {
  id
  content
  createdAt
  updatedAt
  user {
    ...UserFragment
  }
}
    ${UserFragmentFragmentDoc}`;
export const DiariesDocument = gql`
    query Diaries {
  diaries {
    ...DiaryFragment
  }
}
    ${DiaryFragmentFragmentDoc}`;

/**
 * __useDiariesQuery__
 *
 * To run a query within a React component, call `useDiariesQuery` and pass it any options that fit your needs.
 * When your component renders, `useDiariesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useDiariesQuery({
 *   variables: {
 *   },
 * });
 */
export function useDiariesQuery(baseOptions?: Apollo.QueryHookOptions<DiariesQuery, DiariesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<DiariesQuery, DiariesQueryVariables>(DiariesDocument, options);
      }
export function useDiariesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<DiariesQuery, DiariesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<DiariesQuery, DiariesQueryVariables>(DiariesDocument, options);
        }
export type DiariesQueryHookResult = ReturnType<typeof useDiariesQuery>;
export type DiariesLazyQueryHookResult = ReturnType<typeof useDiariesLazyQuery>;
export type DiariesQueryResult = Apollo.QueryResult<DiariesQuery, DiariesQueryVariables>;
export const AddDiaryDocument = gql`
    mutation AddDiary($content: String!) {
  addDiary(content: $content) {
    ...DiaryFragment
  }
}
    ${DiaryFragmentFragmentDoc}`;
export type AddDiaryMutationFn = Apollo.MutationFunction<AddDiaryMutation, AddDiaryMutationVariables>;

/**
 * __useAddDiaryMutation__
 *
 * To run a mutation, you first call `useAddDiaryMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddDiaryMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addDiaryMutation, { data, loading, error }] = useAddDiaryMutation({
 *   variables: {
 *      content: // value for 'content'
 *   },
 * });
 */
export function useAddDiaryMutation(baseOptions?: Apollo.MutationHookOptions<AddDiaryMutation, AddDiaryMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AddDiaryMutation, AddDiaryMutationVariables>(AddDiaryDocument, options);
      }
export type AddDiaryMutationHookResult = ReturnType<typeof useAddDiaryMutation>;
export type AddDiaryMutationResult = Apollo.MutationResult<AddDiaryMutation>;
export type AddDiaryMutationOptions = Apollo.BaseMutationOptions<AddDiaryMutation, AddDiaryMutationVariables>;
export const UpdateDiaryDocument = gql`
    mutation UpdateDiary($diaryId: String!, $content: String!) {
  updateDiary(diaryId: $diaryId, content: $content) {
    ...DiaryFragment
  }
}
    ${DiaryFragmentFragmentDoc}`;
export type UpdateDiaryMutationFn = Apollo.MutationFunction<UpdateDiaryMutation, UpdateDiaryMutationVariables>;

/**
 * __useUpdateDiaryMutation__
 *
 * To run a mutation, you first call `useUpdateDiaryMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateDiaryMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateDiaryMutation, { data, loading, error }] = useUpdateDiaryMutation({
 *   variables: {
 *      diaryId: // value for 'diaryId'
 *      content: // value for 'content'
 *   },
 * });
 */
export function useUpdateDiaryMutation(baseOptions?: Apollo.MutationHookOptions<UpdateDiaryMutation, UpdateDiaryMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateDiaryMutation, UpdateDiaryMutationVariables>(UpdateDiaryDocument, options);
      }
export type UpdateDiaryMutationHookResult = ReturnType<typeof useUpdateDiaryMutation>;
export type UpdateDiaryMutationResult = Apollo.MutationResult<UpdateDiaryMutation>;
export type UpdateDiaryMutationOptions = Apollo.BaseMutationOptions<UpdateDiaryMutation, UpdateDiaryMutationVariables>;
export const DeleteDiaryDocument = gql`
    mutation DeleteDiary($diaryId: String!) {
  deleteDiary(diaryId: $diaryId) {
    ...DiaryFragment
  }
}
    ${DiaryFragmentFragmentDoc}`;
export type DeleteDiaryMutationFn = Apollo.MutationFunction<DeleteDiaryMutation, DeleteDiaryMutationVariables>;

/**
 * __useDeleteDiaryMutation__
 *
 * To run a mutation, you first call `useDeleteDiaryMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteDiaryMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteDiaryMutation, { data, loading, error }] = useDeleteDiaryMutation({
 *   variables: {
 *      diaryId: // value for 'diaryId'
 *   },
 * });
 */
export function useDeleteDiaryMutation(baseOptions?: Apollo.MutationHookOptions<DeleteDiaryMutation, DeleteDiaryMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteDiaryMutation, DeleteDiaryMutationVariables>(DeleteDiaryDocument, options);
      }
export type DeleteDiaryMutationHookResult = ReturnType<typeof useDeleteDiaryMutation>;
export type DeleteDiaryMutationResult = Apollo.MutationResult<DeleteDiaryMutation>;
export type DeleteDiaryMutationOptions = Apollo.BaseMutationOptions<DeleteDiaryMutation, DeleteDiaryMutationVariables>;