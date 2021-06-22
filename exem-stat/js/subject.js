
//we need to make constructor for subject
function Subject (subjectName){
        this.subjectName = subjectName;   
}

// write a name of subject
Subject.prototype.getSubjectName = function() {
    return this.subjectName;
}

