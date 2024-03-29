/**
 *  Plugin object
 *  @module classes/database/plugin
 */

/**
 * Constructs the plugin object
 * @param name The name of the plugin
 * @param version The version
 * @param size The size of the file
 * @param hash The sha1 hash of the file
 * @constructor Plugin
 */
var Plugin = function (name, version, size, hash) {
    this.name = name;
    this.version = version;
    this.size = size;
    this.hash = hash;
};

/**
 * Gets the name of the plugin
 * @returns {*}
 */
Plugin.prototype.getName = function() {
    return this.name;
};

/**
 * Sets the name of the plugin
 * @param value The name
 */
Plugin.prototype.setName = function(value) {
    this.name = value;
};

/**
 * Gets the version of the plugin
 * @returns {*}
 */
Plugin.prototype.getVersion = function() {
    return this.version;
};

/**
 * Sets the version of the plugin
 * @param value The version
 */
Plugin.prototype.setVersion = function(value) {
    this.version = value;
};

/**
 * Gets the size of the file
 * @returns {*}
 */
Plugin.prototype.getSize = function() {
    return this.size;
};

/**
 * Sets the size of the file
 * @param value The size
 */
Plugin.prototype.setSize = function(value) {
    this.size = value;
};

/**
 * Gets the sha1 hash of the file
 * @returns {*}
 */
Plugin.prototype.getHash = function() {
    return this.hash;
};

/**
 * Sets the sha1 hash of the file
 * @param value The sha1 hash
 */
Plugin.prototype.setHash = function(value) {
    this.hash = value;
};

/**
 * Serializes the object to JSON
 * @returns {{name: *, version: *, size: *, hash: *}}
 */
Plugin.prototype.toJSON = function() {
    return {
        name: this.getName(),
        version: this.getVersion(),
        size: this.getSize(),
        hash: this.getHash()
    };
};


Plugin.prototype.save = function(){
    mysqlclient.db.query("INSERT INTO `Plugins` (pluginname, version, size, hash) VALUES ('" + this.getName() + "', '" + this.getVersion() + "', '" + this.getSize() + "', '" + this.getHash() + "')", function(err){
        if(err){log.error(err)}
    });
};

module.exports = Plugin;
