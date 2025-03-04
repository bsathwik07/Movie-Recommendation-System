// Sample data for movie recommendations (manually added 20 movies)
const movieRecommendations = [
    { title: 'Inception', poster_path: 'https://via.placeholder.com/200x300?text=Inception' },
    { title: 'The Dark Knight', poster_path: 'https://via.placeholder.com/200x300?text=The+Dark+Knight' },
    { title: 'Interstellar', poster_path: 'https://via.placeholder.com/200x300?text=Interstellar' },
    { title: 'The Matrix', poster_path: 'https://via.placeholder.com/200x300?text=The+Matrix' },
    { title: 'The Godfather', poster_path: 'https://via.placeholder.com/200x300?text=The+Godfather' },
    { title: 'Pulp Fiction', poster_path: 'https://via.placeholder.com/200x300?text=Pulp+Fiction' },
    { title: 'Fight Club', poster_path: 'https://via.placeholder.com/200x300?text=Fight+Club' },
    { title: 'Forrest Gump', poster_path: 'https://via.placeholder.com/200x300?text=Forrest+Gump' },
    { title: 'The Shawshank Redemption', poster_path: 'https://via.placeholder.com/200x300?text=The+Shawshank+Redemption' },
    { title: 'Schindler\'s List', poster_path: 'https://via.placeholder.com/200x300?text=Schindler%27s+List' },
    { title: 'Gladiator', poster_path: 'https://via.placeholder.com/200x300?text=Gladiator' },
    { title: 'The Lion King', poster_path: 'https://via.placeholder.com/200x300?text=The+Lion+King' },
    { title: 'The Avengers', poster_path: 'https://via.placeholder.com/200x300?text=The+Avengers' },
    { title: 'Spider-Man: No Way Home', poster_path: 'https://via.placeholder.com/200x300?text=Spider-Man%3A+No+Way+Home' },
    { title: 'Avatar', poster_path: 'https://via.placeholder.com/200x300?text=Avatar' },
    { title: 'The Dark Knight Rises', poster_path: 'https://via.placeholder.com/200x300?text=The+Dark+Knight+Rises' },
    { title: 'Jurassic Park', poster_path: 'https://via.placeholder.com/200x300?text=Jurassic+Park' },
    { title: 'The Prestige', poster_path: 'https://via.placeholder.com/200x300?text=The+Prestige' },
    { title: 'Star Wars: A New Hope', poster_path: 'https://via.placeholder.com/200x300?text=Star+Wars%3A+A+New+Hope' },
    { title: 'Memento', poster_path: 'https://via.placeholder.com/200x300?text=Memento' }
];

const friendsSuggestions = [
    { name: 'John', poster_path: 'https://via.placeholder.com/200x300?text=John' },
    { name: 'Alice', poster_path: 'https://via.placeholder.com/200x300?text=Alice' },
    { name: 'Bob', poster_path: 'https://via.placeholder.com/200x300?text=Bob' },
];

// Show movie recommendations when "Get Started" button is clicked
document.getElementById('getStartedBtn').addEventListener('click', function() {
    document.querySelector('.intro').classList.add('hidden');
    document.getElementById('movieRecommendations').classList.remove('hidden');
    loadMovieRecommendations();
});

// Load movie recommendations
function loadMovieRecommendations() {
    const movieList = document.querySelector('.movie-list');
    movieList.innerHTML = '';  // Clear previous movies

    movieRecommendations.forEach(movie => {
        const movieItem = document.createElement('div');
        movieItem.classList.add('movie-item');
        movieItem.innerHTML = `
            <img src="${movie.poster_path}" alt="${movie.title}">
            <h4>${movie.title}</h4>
        `;
        movieList.appendChild(movieItem);
    });
}

// Load friend's suggestions
document.querySelector('.movie-list').addEventListener('click', function() {
    document.getElementById('movieRecommendations').classList.add('hidden');
    document.getElementById('friendsRecommendations').classList.remove('hidden');
    loadFriendsSuggestions();
});

// Load friends' movie suggestions
function loadFriendsSuggestions() {
    const friendList = document.querySelector('.friend-suggestions');
    friendList.innerHTML = '';  // Clear previous suggestions

    friendsSuggestions.forEach(friend => {
        const friendItem = document.createElement('div');
        friendItem.classList.add('friend-item');
        friendItem.innerHTML = `
            <img src="${friend.poster_path}" alt="${friend.name}">
            <h4>${friend.name}</h4>
        `;
        friendList.appendChild(friendItem);
    });
}

// Theme toggle functionality
document.getElementById('themeToggleBtn').addEventListener('click', function() {
    document.body.classList.toggle('dark-theme');
    const isDark = document.body.classList.contains('dark-theme');
    this.textContent = isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode';
});
