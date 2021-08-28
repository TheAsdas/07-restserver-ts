import { model, Schema } from "mongoose";

interface iUsuario {
  nombre: string;
  correo: string;
  clave: string;
  img?: string;
  rol: string;
  estado: boolean;
  google: boolean;
}

const schema = new Schema({
  nombre: {
    type: String,
    required: [true, "El nombre es obligatorio."],
  },
  correo: {
    type: String,
    required: [true, "El correo es obligatorio."],
    unique: true,
  },
  clave: {
    type: String,
    required: [true, "La contraseña es obligatoria"],
  },
  img: {
    type: String,
  },
  rol: {
    type: String,
    required: true,
  },
  estado: {
    type: Boolean,
    default: true,
  },
  google: {
    type: Boolean,
    default: false,
  },
});

schema.methods.toJSON = function () {
  const { __v, clave, ...user } = this.toObject();
  return user;
};

export default model<iUsuario>("Usuario", schema);