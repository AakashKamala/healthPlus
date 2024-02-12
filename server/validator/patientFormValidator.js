// const {z} = require('zod');

// const PatientValidator = z.object({
//   name: z.string({required_error:"Email is required"}),
//   dob: z.date({required_error:"Email is required"}),
//   age: z.number({required_error:"Email is required"}),
//   sex: z.enum(['male', 'female', 'other'],{required_error:"Email is required"}),
//   email: z.string({required_error:"Email is required"}).email(),
//   number: z.string({required_error:"Email is required"}),
//   address: z.string({required_error:"Email is required"}),
//   emergencyContact: z.object({
//     name: z.string({required_error:"Email is required"}),
//     relationship: z.string({required_error:"Email is required"}),
//     phone: z.string({required_error:"Email is required"})
//   }),
//   medications: z.array(z.string({required_error:"Email is required"})),
//   allergies: z.array(z.string({required_error:"Email is required"})),
//   medicalHistory: z.string({required_error:"Email is required"})
// });


// module.exports = PatientValidator;
