var fs=require('fs');
var promisify = function(fn, receiver) {
    return function() {
        var slice   = Array.prototype.slice,
            args    = slice.call(arguments, 0, fn.length - 1),
            promise = new Promise();

        args.push(function() {
            var results = slice.call(arguments),
                error   = results.shift();

            if (error) promise.reject(error);
            else promise.resolve.apply(promise, results);
        });

        fn.apply(receiver, args);
        return promise;
    };
};

var fs_stat = promisify(fs.stat);

var paths = ['file1.txt', 'file2.txt', 'file3.txt'];

// [String] -> [Promise Stat]
var statsPromises = paths.map(fs_stat);