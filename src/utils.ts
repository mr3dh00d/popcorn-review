export const getRandomNumber = (min : number, max : number) => Math.floor(Math.random() * (max - min + 1)) + min;

export const getRandomAvatar = () => {
    const avatar_number = getRandomNumber(1, 15);
    return 'avatar_' + avatar_number;
};

export const getMoviePoster = (poster_path?: string) => {
    return 'https://image.tmdb.org/t/p/original/' + poster_path;
}