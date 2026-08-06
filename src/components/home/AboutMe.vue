<template>
    <section id="about" class="journey-section">
        <div class="container">
            <div class="journey-title">
                <BaseTitle :firstText="$t('aboutTitleFirst') " :lastText="$t('aboutTitleLast')" />
            </div>
            <div class="journey-content" data-aos="zoom-in">
                <p v-html="$t('aboutMeText')"></p>
            </div>
        </div>
    </section>
</template>

<style scoped>
.journey-section {
    padding: 80px 0px 0px 0px;
    background: var(--bg-color);
}

.container {
    max-width: 1200px;
    margin: auto;
    padding: 0 24px;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: 70px;
}

.journey-title {
    width: 30%;
}

.journey-title h2 {
    font-size: 54px;
    font-weight: 700;
    color: #1f2937;
    line-height: 1.2;
    letter-spacing: -1px;
    margin: 0;
}

.journey-content {
    width: 70%;
}

.journey-content p {
    font-size: 17px;
    line-height: 2;
    color: var(--main-color);
    margin-bottom: 28px;
}

.journey-content p:last-child {
    margin-bottom: 0;
}

.journey-content strong {
    color: var(--text-color);
    font-weight: 600;
}

@media (max-width: 992px) {

    .container {
        flex-direction: column;
        gap: 40px;
    }

    .journey-title,
    .journey-content {
        width: 100%;
    }

    .journey-title h2 {
        font-size: 42px;
    }
}

@media (max-width: 768px) {

    .journey-section {
        padding: 20px 0px;
    }

    .journey-title h2 {
        font-size: 34px;
    }

    .journey-content p {
        font-size: 16px;
        line-height: 1.9;
    }
}
</style>