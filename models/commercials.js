const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const commercialSchema = new Schema({
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref:"Users"
      },
    particulars: {
        areaInSqFt: Number,
        rent: [{
            year: Number,
            amount: String
        }],
        tenure: String,
        escalation: String,
        gstApplicability: Boolean,
        otherCharges: {
            cam: String,
            waterCharges: String,
            brokerage: String,
            lLCharges: String
        },
        refundableSD: String
    },
    postNegotiationDetails:{
      storeInteriorCost:String,
      branding:String,
      whiteGoods:String
    },
    capexDetails:{
      particulars:String,
      amount:String
    },
    otherDetails:{
      lockInPeriod:Number, 
      noticePeriod:Number, 
      fitOutPeriod:Number 
   }
},{ timestamps: true });

const Commercial = mongoose.model('Commercial', commercialSchema);
module.exports = Commercial;
