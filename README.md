# Playwright Automated Tests

Цей репозиторій містить автоматизовані тести, написані з використанням [Playwright](https://playwright.dev/).

## Встановлення

1. Клонувати репозиторій:

```bash
git clone <URL_репозиторію>
cd <назва_папки>
````

2. Встановити залежності:

```bash
npm install
```

3. Встановити браузери для Playwright:

```bash
npx playwright install
```

---

## Запуск тестів

### Запуск усіх тестів

```bash
npx playwright test
```

### Запуск конкретного тесту або файлу

```bash
npx playwright test tests/login.spec.ts
```

### Запуск тестів з репортом

```bash
npx playwright test --reporter=html
```

Після завершення можна відкрити звіт у браузері:

```bash
npx playwright show-report
```

## Рекомендації

* Перед запуском тестів переконайтеся, що всі залежності встановлені (`npm install`) і браузери Playwright встановлені (`npx playwright install`).
* Використовуйте окремий `.env` файл, якщо потрібні специфічні конфігурації для середовища тестування.  

Хочеш, щоб я таку зробив?
```
