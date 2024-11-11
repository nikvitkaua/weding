'use strict';

window.addEventListener('DOMContentLoaded', () => {
    // UTM
    function getSpecificUtmParams() {
        const urlParams = new URLSearchParams(window.location.search);
        
        const fValue = urlParams.get('f');
        const nameValue = urlParams.get('n');
        
        return {
            f: fValue,
            name: nameValue
        };
    }
    
    const utmParams = getSpecificUtmParams();
    const name = utmParams.name;
    const category = utmParams.f;



    // Dynamic content 

    const nameContainer = document.querySelector('#name');
    const linkForFriends = document.querySelector('.linkForFriends');
    const friendsGifts = document.querySelector('.friendsGifts');

    nameContainer.innerHTML = name;

    if (category != 'true') {
        linkForFriends.classList.add('hidden');
        friendsGifts.classList.add('hidden');
    }
    
});