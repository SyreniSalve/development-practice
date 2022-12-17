const a = 'Hi';
console.log((a.length > 6 && a.charAt(0) == a.charAt(0).toUpperCase()) ? 'Long uppercase word' :
        (a.length <= 6 && a.charAt(0) == a.charAt(0).toLowerCase()) ? 'Short lowercase word' :
        'Short uppercase or long lowercase');