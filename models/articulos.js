const {Schema, model} = require('mongoose');


const artculosSchema = Schema({
    nombre:{
        type:String,
        required:[true,'El nombre es obligatorio']
    },
    precio:{
        type: Number,
        required: [true, 'El precio es obligatorio']
    },
    estado:{
        type:Boolean,
        default: true
    }
})


artculosSchema.methods.toJSON = function () {
    const {__v,...articulo}= this.toObject();
    return articulo;
}


module.exports = model('Articulo', artculosSchema);