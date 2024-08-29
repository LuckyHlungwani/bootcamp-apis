document.addEventListener('alpine:init', () => {
    Alpine.data('wordGameWidget', () => ({
        sentence: '',
        longestWord: '',
        shortestWord: '',
        wordLengths: '',

        checkSentence() {
            axios.get(`/api/word_game?sentence=${this.sentence}`)
                .then(result => {
                    if (result.data.error) {
                        alert(result.data.error);
                    } else {
                        this.longestWord = result.data.longestWord;
                        this.shortestWord = result.data.shortestWord;
                        this.wordLengths = result.data.sum;
                        setTimeout(() => {
                            this.sentence = '';
                            this.longestWord = '';
                            this.shortestWord = '';
                            this.wordLengths = '';
                        }, 7000);
                    }
                });
        }
    }));

    Alpine.data('phoneBillWidget', () => ({
        billStr: '',
        billMessage: '',

        phoneBill() {
            axios.get(`/api/phonebill/prices?billStr=${this.billStr}`)
                .then(result => {
                    this.billMessage = result.data.bill;
                    setTimeout(() => {
                        this.billMessage = '';
                        this.billStr = '';
                    }, 5000);
                });
        }
    }));

    Alpine.data('airtimeWidget', () => ({
        usage: '',
        available: '',
        billMessage: '',

        enoughAirtimeBill() {
            axios.get(`/api/enough?usage=${this.usage}&available=${this.available}`)
                .then(result => {
                    if (result.data.error) {
                        alert(result.data.error);
                    } else {
                        this.billMessage = result.data.totalBill;
                        setTimeout(() => {
                            this.billMessage = '';
                            this.usage = '';
                            this.available = '';
                        }, 5000);
                    }
                });
        }
    }));
});
