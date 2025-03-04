from flask import Flask, jsonify
import pandas as pd

app = Flask(__name__)

# Load the movie dataset
dataset_path = '"D:\project review recommendation system\tmdb_5000_movies.csv"'  # Replace with the actual path
movies_df = pd.read_csv(dataset_path)

@app.route('/api/movies', methods=['GET'])
def get_movies():
    # Selecting a subset of columns to send to the frontend
    movies = movies_df[['title', 'poster_path']].head(10).to_dict(orient='records')
    return jsonify(movies)

if __name__ == '__main__':
    app.run(debug=True)
