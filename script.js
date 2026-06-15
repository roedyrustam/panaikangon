document.addEventListener('DOMContentLoaded', () => {
    const steps = document.querySelectorAll('.step');
    const dots = document.querySelectorAll('.dot');
    const btnNext = document.getElementById('btn-next');
    const btnPrev = document.getElementById('btn-prev');
    const btnFinish = document.getElementById('btn-finish');

    let currentStep = 0;
    const totalSteps = steps.length;

    function updateUI() {
        // Handle Steps visibility and animation
        steps.forEach((step, index) => {
            step.classList.remove('active', 'exit');
            if (index === currentStep) {
                step.classList.add('active');
            } else if (index < currentStep) {
                step.classList.add('exit');
            }
        });

        // Handle Dots
        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === currentStep);
        });

        // Handle Buttons
        if (currentStep === 0) {
            btnPrev.classList.add('hidden');
        } else {
            btnPrev.classList.remove('hidden');
        }

        if (currentStep === totalSteps - 1) {
            btnNext.classList.add('hidden');
            btnFinish.classList.remove('hidden');
        } else {
            btnNext.classList.remove('hidden');
            btnFinish.classList.add('hidden');
        }
    }

    btnNext.addEventListener('click', () => {
        if (currentStep < totalSteps - 1) {
            currentStep++;
            updateUI();
        }
    });

    btnPrev.addEventListener('click', () => {
        if (currentStep > 0) {
            currentStep--;
            updateUI();
        }
    });

    btnFinish.addEventListener('click', () => {
        // Simulasi aksi saat onboarding selesai, misal ke halaman utama
        btnFinish.innerHTML = '<i class="ph ph-spinner ph-spin"></i> Memuat...';
        btnFinish.style.opacity = '0.8';
        btnFinish.style.pointerEvents = 'none';

        setTimeout(() => {
            window.location.href = 'https://sid.desapanaikang.id';
        }, 800);
    });

    // Optional: Add keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowRight' && currentStep < totalSteps - 1) {
            btnNext.click();
        } else if (e.key === 'ArrowLeft' && currentStep > 0) {
            btnPrev.click();
        }
    });
});
