import mongoose from "mongoose";

mongoose.connect("mongodb+srv://rianyuri:40229732004@aluracurso.hffv2rf.mongodb.net/alura-node");
let db = mongoose.connection;

export default db;