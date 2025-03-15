
$(document).ready(function() {
  // Set default quit date to today
  $('#quitDate').val(new Date().toISOString().split('T')[0]);

  const healthMilestones = [
    { time: '20 minutes', benefit: 'Your heart rate and blood pressure drop.' },
    { time: '12 hours', benefit: 'The carbon monoxide level in your blood drops to normal.' },
    { time: '2-12 weeks', benefit: 'Your circulation improves and lung function increases.' },
    { time: '1-9 months', benefit: 'Coughing and shortness of breath decrease.' },
    { time: '1 year', benefit: 'Your risk of coronary heart disease is cut in half.' },
    { time: '5 years', benefit: 'Your risk of stroke is reduced to that of a non-smoker.' },
    { time: '10 years', benefit: 'Your lung cancer death rate is about half that of a smoker.' },
    { time: '15 years', benefit: 'Your risk of heart disease is similar to that of a non-smoker.' }
  ];

  function calculateSavings() {
    const cigarettesPerDay = parseFloat($('#cigarettesPerDay').val());
    const packCost = parseFloat($('#packCost').val());
    const cigarettesPerPack = 20;
    
    const dailyCost = (cigarettesPerDay / cigarettesPerPack) * packCost;
    const monthlyCost = dailyCost * 30.44; // Average days per month
    
    $('#savings1Month').text(Math.round(monthlyCost));
    $('#savings3Months').text(Math.round(monthlyCost * 3));
    $('#savings6Months').text(Math.round(monthlyCost * 6));
    $('#savings1Year').text(Math.round(monthlyCost * 12));
    $('#savings5Years').text(Math.round(monthlyCost * 12 * 5));
    $('#savings15Years').text(Math.round(monthlyCost * 12 * 15));
    
    // Display health benefits
    $('#healthBenefits').empty();
    healthMilestones.forEach(milestone => {
      $('#healthBenefits').append(`
        <div class="health-milestone">
          <h3>After ${milestone.time}</h3>
          <p>${milestone.benefit}</p>
        </div>
      `);
    });
    
    $('#results').slideDown();
  }

  $('#calculateBtn').click(calculateSavings);

  // Recalculate when inputs change
  $('.calculator-form input').on('change', calculateSavings);
});
