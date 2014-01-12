function generateTableOfContents (doc) {
    doc = doc || document;
    var toc = doc.getElementById('toc');
    var sections = [].slice.call(doc.body.querySelectorAll('div.section'));
    sections.forEach(function (section, index) {
        var heading = section.querySelector('h2');

        var link = doc.createElement('a');
        link.setAttribute('href', '#' + section.id);
        link.textContent = heading.textContent;

        var div = doc.createElement('div');
        div.setAttribute('class', heading.tagName.toLowerCase());

        div.appendChild(link);
        
        var subSections = [].slice.call(section.querySelectorAll('div.sub-section'));
        subSections.forEach(function (subSection, index) {
            var subHeading = subSection.querySelector('h4');
            var subLink = doc.createElement('a');
            subLink.setAttribute('href', '#' + subSection.id);
            subLink.setAttribute('class', 'sub-header');
            subLink.textContent = subHeading.textContent;
            div.appendChild(subLink);
        });
        toc.appendChild(div);
   });
}

try {
     module.exports = generateTableOfContents;
} catch (e) {
    // module.exports is not defined
}

window.onload = function () {
    generateTableOfContents();
}
