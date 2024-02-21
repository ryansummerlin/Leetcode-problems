// Given a string path, which is an absolute path (starting with a slash '/') to a file or directory in a Unix-style file system,
// convert it to the simplified canonical path.

// In a Unix-style file system, a period '.' refers to the current directory, a double period '..' refers to the directory up a level,
// and any multiple consecutive slashes (i.e. '//') are treated as a single slash '/'. For this problem, any other format of periods
// such as '...' are treated as file/directory names.

// The canonical path should have the following format:

// The path starts with a single slash '/'.
// Any two directories are separated by a single slash '/'.
// The path does not end with a trailing '/'.
// The path only contains the directories on the path from the root directory to the target file or directory (i.e., no period '.' or
// double period '..')
// Return the simplified canonical path.



// This doesn't pass but I'm confused by the example where it fails. I'm getting an output that I think should be correct.

var simplifyPath = function(path) {
    let last = path.length - 1;
    let canonicalPath = '';
    let i = path.length - 1;
    while (i >= 0) {
        if (path[i] !== '.' && path[i] !== '/') {
            last = i;
            break;
        }
        i--;
    }

    i = 0;
    while (i < last) {
        let char = path[i];
        if (char === '.') {
            canonicalPath = '';
        } else if (char === '/' && path[i + 1] === '/') {
            canonicalPath += '/';
            while(path[i + 1] === '/' && i < path.length) {
                i++;
            }
        } else {
            canonicalPath += char;
        }

        i++;
    }

    canonicalPath += path[last];
    if (canonicalPath[0] !== '/') canonicalPath = '/' + canonicalPath;

    return canonicalPath;


};



// much more elegant solution from online. Splits components with '/' and loops through the array checking for blanks or single periods
// wrinkle I missed above is '..' means move up a level so you need to pop the last value off of the array. Time complexity O(n).

var simplifyPath = function (path) {
    const simplifiedPath = [];
    const dirs = path.split("/");

    for (const dir of dirs) {
      if (dir === "" || dir === ".") continue;
      dir === ".." ? simplifiedPath.pop() : simplifiedPath.push(dir);
    }

    return "/" + simplifiedPath.join("/");
  };
