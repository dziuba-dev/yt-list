function loadJSON(path, success, error) {
    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = () => {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
                if (success)
                    success(JSON.parse(xhr.responseText));
            } else {
                if (error)
                    error(xhr);
            }
        }
    };
    xhr.open("GET", path, true);
    xhr.send();
}

function getImage(node, channel) {
    node.href = channel.customUrl;
    let child = node.children[0];
    child.src = channel.thumbnails.medium.url;
    child.alt = channel.title;
    child.width = channel.thumbnails.medium.width;
    child.height = channel.thumbnails.medium.height;
}

function getTitle(node, channel) {
    node.children[0].innerText = channel.title;
}

function addInnerText(child, text) {
    child.children[1].innerText = new Intl.NumberFormat('en-US', { maximumSignificantDigits: 3 }).format(text);
}

function getDetails(node, channel) {
    for (const child of node.children) {
        switch (child.id) {
            case 'subscribers':
                addInnerText(child, channel.statistics.subscriberCount);
                break;
            case 'videos':
                addInnerText(child, channel.statistics.videoCount);
                break;
            case 'views':
                addInnerText(child, channel.statistics.viewCount);
                break;
            default:
                break;
        }
    }
}

function showChannels(channels) {
    for (const channel of channels) {
        let template = document.getElementsByTagName('template')[0];
        let div = template.content.querySelector('div');
        let node = document.importNode(div, true);
        for (let i = 0; i < node.children.length; i++) {
            let child = node.children[i];
            switch (child.id) {
                case 'image-channel':
                    getImage(child, channel);
                    break;
                case 'title-channel':
                    getTitle(child, channel);
                    break;
                case 'details-channel':
                    getDetails(child, channel);
                    break;
                default:
                    break;
            }
        }
        document.getElementsByTagName('main')[0].appendChild(node);
    }
}

loadJSON('assets/channels.json',
    data => {
        showChannels(data);
    },
    xhr => { console.error(xhr); }
)
