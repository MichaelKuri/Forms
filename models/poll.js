const
    mongoose = require('mongoose'),
    answerSchema = new mongoose.Schema({
        id: {
            type: String,
            unique: true
        },
        answer: {
            type: String,
            require: true
        }
    }),
    questionSchema = new mongoose.Schema({
        id: {
            type: String,
            unique: true
        },
        name: {
            type: String
        },
        typeQuestion: {
            type: String,
            enum: ['Individual choice', 'multiple choice', 'Linear', 'open question']
        },
        limitAnswer: {
            type: Number
        },
        order: {
            type: Number
        },
        required: {
            type: Boolean
        },
        imgSource: {
            type: String
        },
        answer: [answerSchema]
    }),
    schema = new mongoose.Schema({

        name: {
            type: String,

        },
        description: {
            type: String,
        },
        date: {
            type: Date
        },
        editor: {
            type: String
        },
        designSetting:
        {
            background: {
                type: String
            },
            logo: {
                type: String
            }
        },
        link: {
            type: String
        },
        question: [questionSchema]
    })


module.exports = mongoose.model('poll', schema)