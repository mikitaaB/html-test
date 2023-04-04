import shell from 'shelljs';
import ghpages from 'gh-pages';

ghpages.publish('./build', {
    add: true,
    branch: 'gh-pages',
    repo: 'git@github.com:mikitaab/test-task-html.git'
},
    (err) => {
        if (err) console.error("ERROR: ", err);
        else console.log("Published");
    }
);