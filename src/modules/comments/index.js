import { GraphQLString, GraphQLList, GraphQLInputObjectType } from "graphql";

import CommentType from "./CommentType";
import { getComment, saveComment } from "./CommentLoader";

export const queries = {
  getComments: {
    type: GraphQLList(CommentType),
    resolve: getComment
  }
};

export const mutations = {
  saveComment: {
    type: CommentType,
    resolve: saveComment,
    args: {
      input: {
        type: new GraphQLInputObjectType({
          name: "CommentInput",
          fields: {
            name: {
              type: GraphQLString
            },
            content: {
              type: GraphQLString
            }
          }
        })
      }
    }
  }
};
