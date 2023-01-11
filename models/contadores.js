

const {Schema, model} = require('mongoose');


const contadoresSchema = Schema({
    name:{
        type:String,
        required:[true, 'El nombre es obligatorio']
    },
    longitude:{
        type:Number,
        required:[true,'la longitud es requerida']
    },
    latitude:{
        type:Number,
        required:[true,'la latitud es requerida']
    },
    where:{
        type:Boolean,
        required:[true,'la propiedad where es requerida']
    }
})

contadoresSchema.methods.toJSON = function () {
    const {__v,...contador}= this.toObject();
    return contador;
}


module.exports = model('Contadores', contadoresSchema);