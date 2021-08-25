# Test with Twitter API + AWS Serverless (SAM)

- part1: Twitter API access
- part2: AWS Serverless (with SAM/DynamoDB)

---

## Part I

After clone, do this ...

```bash
cd part1
npm install
npm start
```

> `.env` file must be configured with your Twitter Developer Account

### Part II

With a tool like **PostMan** or **cURL** call a `POST` with:

https://jtfwpplkr9.execute-api.us-east-1.amazonaws.com/Prod/mytest/

For body make a **JSON** like this:

```json
{
  "description": "You know who I am",
  "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/James_Rodriguez_Training_2019-04-10_FC_Bayern_Muenchen-1.jpg/200px-James_Rodriguez_Training_2019-04-10_FC_Bayern_Muenchen-1.jpg",
  "twitter_user_name": "jamesdrodriguez",
  "title": "Soccer Player",
  "last_names": "Rodriguez Rubio",
  "names": "James David",
  "twitter_user_id": null,
  "user_id": null
}
```

> You also can call a `GET` with `id` as parameter
