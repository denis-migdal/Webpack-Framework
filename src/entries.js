const {glob, globSync} = require('glob');

module.exports = function(src) {

    return async () => {

        const entries = {};

        // main entry (TODO: remove/rename?)
        const main_files = await glob(`${src}/index.*`, {dotRelative: true});
        entries.main = main_files;

        // pages entries
        const files = await glob(src + '/pages/**/index.*', {dotRelative: true});   
        for(let file of files) {

            const entry_name = file.slice(src.length + 6, file.lastIndexOf('/') );

            let entry = entries[entry_name];
            if(entry === undefined) {
                entry = entries[entry_name]= { import: []};
                if( ! entry_name.startsWith("skeleton") )
                    entry.dependOn = ["skeleton/liss"]
            }
            entry.import.push(file);
        }

        const libs = await glob(src + '/libs/**/index.ts', {dotRelative: true});   
        for(let lib of libs) {

            const entry_name = lib.slice(src.length, lib.lastIndexOf('/') );

            entries[entry_name]= {
                import: [ lib ],
                library: {
                    //name: entry_name.slice(5),
                    type: "module" // "umd" - "modern-module" (doesn't work)
                }
            };

        }

        return entries;
    }
}