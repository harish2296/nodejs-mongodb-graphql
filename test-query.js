const graphql = require('graphql');
const Collection1Schema = require('./collection1Schema-model');
const Collection2Schema = require('./collection2Schema-model');
const { GraphQLJSON, GraphQLJSONObject } = require('graphql-type-json');

const {
    GraphQLObjectType, GraphQLString,
    GraphQLID, GraphQLInt, GraphQLSchema,
    GraphQLList, GraphQLNonNull, GraphQLBoolean, GraphQL
} = graphql;


const Collection1SchemaType = new GraphQLObjectType({
    name: 'collection1',
    fields: () => ({
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        // status: { type: GraphQLBoolean },
        mock_data: { type: GraphQLJSONObject },
    })
});

const Collection2SchemaType = new GraphQLObjectType({
    name: 'collection2',
    fields: () => ({
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        status: { type: GraphQLBoolean }
    })
});


const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        collection1: {
            type: Collection1SchemaType,
            args: { id: { type: GraphQLID } },
            resolve(parent, args) {
                return Collection1Schema.findOne({ id: args.id });
            }
        },
        collections1: {
            type: new GraphQLList(Collection1SchemaType),
            resolve(parent, args) {
                return Collection1.find({});
            }
        },
        collection2: {
            type: Collection2SchemaType,
            args: { id: { type: GraphQLID } },
            resolve(parent, args) {
                return Collection2Schema.findOne({ id: args.id });
            }
        },
        collections2: {
            type: new GraphQLList(Collection2SchemaType),
            resolve(parent, args) {
                return Collection2Schema.find({});
            }
        }
    }
});

module.exports = new GraphQLSchema({
    query: RootQuery
});