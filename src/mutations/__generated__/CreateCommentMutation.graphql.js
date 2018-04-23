/**
 * @flow
 * @relayHash a115312be1ad6314a0e1dc3b1bec00d8
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type CreateCommentInputVariables = {|
  content: string,
  commentedById: ?string,
  commentedBy: ?CommentcommentedByUserVariables,
  commentedPostId: ?string,
  commentedPost: ?CommentcommentedPostPostVariables,
  clientMutationId: string,
|};
type CommentcommentedByUserVariables = {|
  email: string,
  name: string,
  password: string,
  commentsIds: ?$ReadOnlyArray<string>,
  comments: ?$ReadOnlyArray<UsercommentsCommentVariables>,
  postsIds: ?$ReadOnlyArray<string>,
  posts: ?$ReadOnlyArray<UserpostsPostVariables>,
|};
type UsercommentsCommentVariables = {|
  content: string,
  commentedPostId: ?string,
  commentedPost: ?CommentcommentedPostPostVariables,
|};
type CommentcommentedPostPostVariables = {|
  description: string,
  imageUrl: string,
  siteUrl: string,
  postedById: ?string,
  postedBy: ?PostpostedByUserVariables,
  commentsIds: ?$ReadOnlyArray<string>,
  comments: ?$ReadOnlyArray<PostcommentsCommentVariables>,
|};
type PostpostedByUserVariables = {|
  email: string,
  name: string,
  password: string,
  commentsIds: ?$ReadOnlyArray<string>,
  comments: ?$ReadOnlyArray<UsercommentsCommentVariables>,
  postsIds: ?$ReadOnlyArray<string>,
  posts: ?$ReadOnlyArray<UserpostsPostVariables>,
|};
type UserpostsPostVariables = {|
  description: string,
  imageUrl: string,
  siteUrl: string,
  commentsIds: ?$ReadOnlyArray<string>,
  comments: ?$ReadOnlyArray<PostcommentsCommentVariables>,
|};
type PostcommentsCommentVariables = {|
  content: string,
  commentedById: ?string,
  commentedBy: ?CommentcommentedByUserVariables,
|};
export type CreateCommentMutationVariables = {|
  input: CreateCommentInputVariables,
|};
export type CreateCommentMutationResponse = {|
  +createComment: ?{|
    +comment: ?{|
      +id: string,
      +content: string,
    |},
  |},
|};
*/


/*
mutation CreateCommentMutation(
  $input: CreateCommentInput!
) {
  createComment(input: $input) {
    comment {
      id
      content
    }
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "input",
    "type": "CreateCommentInput!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "createComment",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input",
        "type": "CreateCommentInput!"
      }
    ],
    "concreteType": "CreateCommentPayload",
    "plural": false,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "comment",
        "storageKey": null,
        "args": null,
        "concreteType": "Comment",
        "plural": false,
        "selections": [
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "id",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "content",
            "args": null,
            "storageKey": null
          }
        ]
      }
    ]
  }
];
return {
  "kind": "Request",
  "operationKind": "mutation",
  "name": "CreateCommentMutation",
  "id": null,
  "text": "mutation CreateCommentMutation(\n  $input: CreateCommentInput!\n) {\n  createComment(input: $input) {\n    comment {\n      id\n      content\n    }\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "CreateCommentMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": v1
  },
  "operation": {
    "kind": "Operation",
    "name": "CreateCommentMutation",
    "argumentDefinitions": v0,
    "selections": v1
  }
};
})();
(node/*: any*/).hash = '7f4415792866721a646a2a98aac05a49';
module.exports = node;