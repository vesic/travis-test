module.exports = {
    names: [
        'alice',
        'jane',
        'bob',
        'jack',
        'janet'
    ],
    
    getAllNames: function() {
        return this.names;
    },
    
    getFirstName: function() {
        return this.names[1];
    }
}