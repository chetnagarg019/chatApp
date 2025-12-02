import mongoose from "mongoose";

const notesSchema = new mongoose.Schema(
    {
        userId : {
            type : String,
            required : true
        },

        title : {
            type : String,
           default : ""
        },

        content : {
            type : String,
            default : ""
        },
    },{timestamps : true});

    const Notes = mongoose.model("Notes",notesSchema);

    export default Notes;
