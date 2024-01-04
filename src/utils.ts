export const getRandomNumber = (min : number, max : number) => Math.floor(Math.random() * (max - min + 1)) + min;

export const getRandomAvatar = () => {
    const avatar_number = getRandomNumber(1, 15);
    return '/avatars/avatar_' + avatar_number + '.png';
};