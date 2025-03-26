from flask import Flask, request, jsonify
from flask_cors import CORS
from deep_translator import GoogleTranslator


app = Flask(__name__)
CORS(app)  # Enable Cross-Origin requests from the frontend

@app.route('/process', methods=['POST'])
def process_input():
    data = request.json  # Receive data as JSON
    user_input =data.get('input', '')
    lang_sel= int(data.get('selectedValue', 0))
    if(lang_sel ==1):
        translator = GoogleTranslator(source="en", target="ta")
    elif(lang_sel ==2):
        translator = GoogleTranslator(source="en", target="hi")
    elif(lang_sel ==3):
        translator = GoogleTranslator(source="en", target="te") 
    elif(lang_sel ==4):
        translator = GoogleTranslator(source="en", target="ml")
    # English to Hindi
    translated_text = translator.translate(user_input)
    result = translated_text
    return jsonify({'result': result})  # Return the processed result

if __name__  == '__main__':
    app.run(debug=True, port=5000)