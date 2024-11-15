import os
import openai
from flask import Flask, request, jsonify
from dotenv import load_dotenv


load_dotenv()


app = Flask(__name__)


openai.api_key = os.getenv("OPENAI_API_KEY")

@app.route("/")
def home():
    return "BrainX Backend API is running"

@app.route("/api/generate", methods=["POST"])
def generate_response():
    try:
       
        user_message = request.json.get("message")

        if not user_message:
            return jsonify({"error": "No message provided."}), 400

    
        response = openai.ChatCompletion.create(
            model="gpt-3.5-turbo",  
            messages=[
                {"role": "system", "content": "You are a helpful assistant."},
                {"role": "user", "content": user_message},
            ],
        )

        
        assistant_message = response['choices'][0]['message']['content']

        return jsonify({"response": assistant_message, "success": True}), 200

    except openai.error.OpenAIError as e:
       
        return jsonify({"error": str(e), "success": False}), 500

    except Exception as e:
     
        return jsonify({"error": str(e), "success": False}), 500

if __name__ == "__main__":
    app.run(debug=True)
