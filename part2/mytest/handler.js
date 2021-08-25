const AWS = require('aws-sdk');
const dynamo = new AWS.DynamoDB.DocumentClient();

const TABLE_NAME = process.env.PORTFOLIO_TABLE;

function getId() {
    let d = new Date();
    let n = d.getUTCFullYear() + d.getUTCMonth() + d.getUTCDate() + d.getUTCHours() + d.getUTCMinutes() + Math.floor(Math.random() * 99999);
    return n;
}

async function saveItem(item) {
    const params = {
        TableName: TABLE_NAME,
        Item: item
    }

    return dynamo.put(params).promise().then(() => {
        return item;
    });
}

exports.setPortfolio = async (event) => {
    let id = getId();
    let item = {};
    if (event.body !== null && event.body !== undefined) {
        item = JSON.parse(event.body);
        item.idportfolio = id.toString();
    }

    const savedItem = await saveItem(item);

    return {
        statusCode: 200,
        body: JSON.stringify(savedItem)
    }
}

exports.getPortfolio = async (event) => {
    const id = event['queryStringParameters']['id'] || event['pathParameters']['id'];
    const params = {
        TableName: TABLE_NAME,
        Key: {
            'idportfolio': id.toString()
        }
    }

    dynamo.get(params, AWS.Request.send);

    /*dynamo.get(params, function(err, item) {
        console.log(item)
        if (err) console.error(err, err.stack); // an error occurred
        return {
            statusCode: 200,
            //body: JSON.stringify(item)
            body: item
        }
    });*/
}
