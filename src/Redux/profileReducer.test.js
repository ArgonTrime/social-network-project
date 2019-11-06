import profileReducer, {addPostProfile, deletePost} from "./profileReducer";


let state = {
    profilePosts: [
        {id: 1, messege: 'Welcome, Social network', likeCounts: 15},
        {id: 2, messege: 'How are you?', likeCounts: 3},
        {id: 3, messege: 'Great moving in the right direction', likeCounts: 9},
        {id: 4, messege: 'Add messege map, good!', likeCounts: 4}
    ]
};

it('length of post should be incremented', () =>{
    // 1. test data
    let action = addPostProfile('Test add message');

    // 2. action
    let newState = profileReducer(state, action);

    // 3. expectation
    expect(newState.profilePosts.length).toBe(5);
    expect(newState.profilePosts[4].messege).toBe('Test add message');
});

it('message of new post should be correct', () =>{
    // 1. test data
    let action = addPostProfile('Test add message');

    // 2. action
    let newState = profileReducer(state, action);

    // 3. expectation
    expect(newState.profilePosts[4].messege).toBe('Test add message');
});

it('after deleting length of messages should be decrement', () =>{
    // 1. test data
    let action = deletePost(1);

    // 2. action
    let newState = profileReducer(state, action);

    // 3. expectation
    expect(newState.profilePosts.length).toBe(3);
});


