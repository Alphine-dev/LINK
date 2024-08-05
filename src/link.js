export function link(){

    function get(url, options={}, errorHandler){
        return fetch(url, {
            method: 'GET',
            ...options
        }).then(response =>{
            if(!response.ok){
                throw new Error(`Network response was not ok: ${response.statusText}`);
            }
            return response.json();
        }).catch(error => {
            if (errorHandler) {
                errorHandler(error);
            } else {
                console.error('Error:', error);
                throw error;
            }
        });
    };

    return {
        get,
    };
}

export const LINK = new link();

/*
function post(){

    };

    function update(){

    };

    function remove(){

    };

    function read(){

    };
*/

//paste it in return statement

// post,
// update,
// remove,
// read