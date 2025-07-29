const demandList = document.getElementById('demand-list');
const bidList = document.getElementById('bid-list');

const dummyDemands = [
    { id: 1, title: '2 BHK flat near Haibargaon', budget: '₹25-30L', time: 'Immediate' },
    { id: 2, title: 'Shop space in Nagaon town', budget: '₹15-20L', time: 'Next 3 months' },
    { id: 3, title: '3 BHK independent house', budget: '₹50L+', time: 'Next 6 months' }
];

function addDummyDemands() {
    demandList.innerHTML = '';
    dummyDemands.forEach(demand => {
        let div = document.createElement('div');
        div.className = 'demand';
        div.innerHTML = `<h3>${demand.title}</h3><p>Budget: ${demand.budget}</p><p>Timeline: ${demand.time}</p><button onclick="showBids(${demand.id})">See Bids</button>`;
        demandList.appendChild(div);
    });
}

function showBids(demandId) {
    bidList.innerHTML = `<p>Loading bids for demand #${demandId}...</p>`;
    setTimeout(() => {
        bidList.innerHTML = '<ul><li>Business A - ₹5L below budget</li><li>Business B - ₹3L below budget</li></ul>';
    }, 1000);
}
