/**
 *  User object
 *  @module classes/database/user
 */

var User = function(username, password, rank, twofa) {
    this.username = username;
    this.password = password;
    this.rank = rank;
    if(twofa) {
        this.twofa = twofa;
    }
    this.backupcode = backupcode;
};

User.prototype.getUsername = function() {
    return this.username;
};

User.prototype.setUsername = function(value) {
    this.username = value;
};

User.prototype.getPassword = function() {
    return this.password;
};

User.prototype.setPassword = function(value) {
    this.password = value;
};

User.prototype.getRank = function() {
    return this.rank;
};

User.prototype.setRank = function(value) {
    this.rank = value;
};

User.prototype.getTwoFA = function() {
    return this.twofa;
};

User.prototype.setTwoFA = function(value) {
    this.twofa = value;
};

User.prototype.getBackupCode = function() {
    return this.backupcode;
};

User.prototype.setBackupCode = function(value) {
    this.backupcode = value;
};

User.prototype.toJSON = function() {
    return {
        username: this.getUsername(),
        password: this.getPassword(),
        rank: this.getRank(),
        twofa: this.getTwoFA()
    };
};

User.prototype.save = function(){
    mysqlclient.db.query("INSERT INTO `Users` (username, password, rang, twofa, backupcode) VALUES ('" + this.getUsername() + "', '" + this.getPassword() + "', '" + this.getRank() + "', '" + this.getTwoFA() + "', '" + this.getBackupCode() + "')", function(err){
        if(err){log.error(err)}
    });
};

module.exports = User;