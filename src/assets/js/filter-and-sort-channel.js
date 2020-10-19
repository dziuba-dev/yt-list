function clearRadio() {
    document.querySelector('input[name="sort"]:checked').checked = false;
}

function clearFilter() {
    document.getElementById('filters').value = "";
}

function clearList() {
    let template = document.getElementsByTagName('main')[0];
    for (const child of template.children) {
        if (child.nodeName === 'SPAN') {
            document.getElementsByTagName('main')[0].innerHTML = '';
            document.getElementsByTagName('main')[0].appendChild(child);
        }
    }
}

function checkSort() {
    let input = document.getElementsByTagName('input');
    for (const item of input) {
        if (item.checked === true)
            return true;
    }
    return false
}

function checkFilter() {
    return document.getElementById('filters').value !== "";
}

function checkSortName() {
    let input = document.getElementsByTagName('input');
    for (const item of input) {
        if (item.checked === true)
            return item.id.split('-')[1];
    }
    return ""
}

function sort(data, sortName) {
    switch (sortName) {
        case 'title':
            data.sort((a, b) => (a.title.toLowerCase() < b.title.toLowerCase()) ? -1 : (a.title.toLowerCase() > b.title.toLowerCase()) ? 1 : 0);
            showChannels(data);
            break;
        case 'subscribers':
            data.sort((a, b) => a.statistics.subscriberCount - b.statistics.subscriberCount);
            showChannels(data);
            break;
        case 'videos':
            data.sort((a, b) => a.statistics.videoCount - b.statistics.videoCount);
            showChannels(data);
            break;
        case 'views':
            data.sort((a, b) => a.statistics.viewCount - b.statistics.viewCount);
            showChannels(data);
            break;
        default:
            clearRadio();
            clearFilter();
            showChannels(data);
            break;
    }
}

function getDataToSort(sortName) {
    loadJSON('assets/channels.json',
        data => {
            clearList();
            sort(data, sortName);
        },
        xhr => { console.error(xhr); }
    )
}

function includeSearch(data, search) {
    return data.filter(item => item.title.toLowerCase().includes(search.toLowerCase()));
}

function filter(search) {
    loadJSON('assets/channels.json',
        data => {
            let result = includeSearch(data, search);
            clearList();
            if (search === '' && result.length > 0) {
                showChannels(data);
            } else if (result.length === 0) {
                alert("No filter results");
            } else {
                showChannels(result);
            }
        },
        xhr => { console.error(xhr); }
    )
}

function filterSort(search, sortName) {
    loadJSON('assets/channels.json',
        data => {
            let result = includeSearch(data, search);
            clearList();
            sort(result, sortName || checkSortName());
        },
        xhr => { console.error(xhr); }
    )
}

function delay(callback, ms) {
    let timer = 0;
    return () => {
        let context = this, args = arguments;
        clearTimeout(timer);
        timer = setTimeout(() => {
            callback.apply(context, args);
        }, ms || 0);
    };
}

document.getElementById ("sort-title").addEventListener("click", () => {
    if (checkFilter()) {
        filterSort(document.getElementById('filters').value, 'title');
    } else {
        getDataToSort('title');
    }
}, false);

document.getElementById ("sort-subscribers").addEventListener("click", () => {
    if (checkFilter()) {
        filterSort(document.getElementById('filters').value, 'subscribers');
    } else {
        getDataToSort('subscribers');
    }
}, false);

document.getElementById ("sort-videos").addEventListener("click", () => {
    if (checkFilter()) {
        filterSort(document.getElementById('filters').value, 'videos');
    } else {
        getDataToSort('videos');
    }
}, false);

document.getElementById ("sort-views").addEventListener("click", () => {
    if (checkFilter()) {
        filterSort(document.getElementById('filters').value, 'views');
    } else {
        getDataToSort('views');
    }
}, false);

document.getElementById ("clear").addEventListener("click", () => {
    getDataToSort('clear');
}, false);

document.getElementById ('filters').addEventListener('keyup', delay(() => {
    if (checkSort()) {
        filterSort(document.getElementById('filters').value);
    } else {
        filter(document.getElementById('filters').value);
    }
}, 500));
