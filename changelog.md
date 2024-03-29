**1.** Проинсталировать [Angular-CLI](https://github.com/angular/angular-cli) и/или [AngularConsole](https://angularconsole.com)

	- Просмотреть [CLI QuickStart](https://angular.io/docs/ts/latest/cli-quickstart.html)
	- Просмотреть [Style Guide](https://angular.io/guide/styleguide)
	- Просмотреть [СLI Commands](https://angular.io/cli)
	- Просмотреть [Deprecation Guide](https://angular.io/guide/deprecations)

**2.** Создайте проект (`ng new shop`) и загрузите его на гитхаб без каких-либо дополнительных папок. Код можете писать для себя в отдельных бренчах. Итоговый код добавляйте в мастер и после этого отправляйте мне. В `package.json` для команды `start` добавьте флаг `-o`, чтобы при запуске проекта открывался браузер.

**3.** Создайте компонент `ProductComponent`. Используйте его в `AppComponent`.

**4.** Добавьте несколько простых свойств для компонента `ProductComponent` и несколько свойств в виде массива. Выведите их в темплейт:

	- name: string
	- description: string
	- price: number
	- category: enum (Создайте enum с несколькими категориями)
	- isAvailable: boolean
	- authors: string[]

**5.** Добавьте кнопку `Buy`. Реализуйте обработчик события клик `onBuy()`, который выводит в консоль сообщение о покупке товара.

**6.** Создайте сервис `ProductsService`, который будет возвращать товары. Модель товара опишите интерфейсом и/или классом,
который реализует данный интерфейс. Создайте компонент `ProductListComponent`. Используйте в нем сервис `ProductsService`, отобразите данные на станице c помощью директивы `*ngFor`.

**7.** Создайте компонент (`ng g c cart`) и используйте его в `AppComponent` темплейте. Компонент должен отображать список купленых товаров.
Организуйте список в виде отдельного сервиса - `CartService`. Используйте директиву `*ngIf + else` для отображения корзины (`CartComponent`), если она не пустая. Если корзина пустая отображать другой альтернативный блок с сообщением о пустой корзине.

**8.** Добавлены стили для кнопки. Изменен файл `.editorconfig`.

**9.** Создайте файл `changelog.md` в корне проекта и описывайте в нем то, что реализовали.

**10.** Запустите команду `ng lint` и исправьте ошибки, если такие будут обнаружены.

**11.** Загрузите ваш проект на github и отправьте мне ссылку (Vitaliy_Zhyrytskyy@epam.com). Cсылку надо отправлять после каждого задания. Это будет сигнал для меня, что вы завершили его.

**12.** Разбить приложение на несколько модулей.

**13.** Создайте или модифицируйте `ProductListComponent`, который делегирует отображение списка товаров компоненту `ProductComponent`. Товары компоненту предоставить с помощью метода `getProducts()` сервиса `ProductService`.

**14**. Реализовать возможность добавления товара в корзину `(click)`, если товар есть в наличии (доступен). Товар в корзину должен добавлять `ProductListComponent`. `ProductComponent` реализовать как презентационный компонент с инпутами и аутпутами без зависимостей. Если товара нет, кнопку делать недоступной. 

**15**. Создайте или модифицируйте `CartComponent`, который отображает список купленных товаров. Кроме списка купленных товаров, отображать количество купленных товаров и общую сумму.

**16.**. Создайте компонент `СartItemComponent`, который отображает одну сущность из списка выше. Используйте этот компонент в `CartComponent`. Реализовать возможность изменить количество товара, удалить товар из корзины.

**17.** Создать или модифицировать сервис `CartService` для предоставления данных компоненту `CartComponent`, подсчета количества и суммы.

**18.** Добавить в разметку `AppComponent` элемент `<h1 #appTitle></h1>` с шаблонной переменной. Использовать `@ViewChild`, получить доступ к DOM элементу темплейта, установить заголовок для приложения из класса.

**19.** При наведении мышки на товар в корзине `CartItemComponent` стилизировать его изменением фона. Для этого создать директиву и зарегистрировать ее в `SharedModule`. Использовать `@HostBinding`, `@HostListener` декораторы.

**20.** Использовать:

	- декораторы @Input(), @Output()
	- OnPush стратегию для компонентов
	- два или более метода-хука жизненого цикла компонента
	- DOM события (click, wheel, blur...)
	- директиву ngClass или ngStyle

**21.** Переместить глобальные стили в `styles.less` файл.

**22.** Создайте сервис `LocalStorageService` (core/services/local-storage.service.ts), который позволит работать с `window.localStorage` (как класс, `useClass`). Он должен предоставлять методы для:

	- установки значения (setItem)
	- получения значения (getItem)
	- удаления значения (removeItem)

**23.** Создайте сервис `ConfigOptionsService` (core/services/config-options.service.ts), который должен хранить объект настроек (id, login, email, ...). Сервис должен предоставлять методы для установки и извлечения данных. Метод установки на вход принимает объект, а метод извлечения данных возвращает объект. Предусмотреть возможность установки подмножества свойств.

**24.** Создайте сервис `ConstantsService` (core/services/constant.service.ts), в виде готового литерала объекта, например { App: "TaskManager", Ver: "1.0" }. Зарегистрируйте его, используя `useValue`.

**25.** Создайте сервис `GeneratorService` (core/services/generator.ts), который должен генерировать случайную последовательность символов длины `n` из набора `a-z, A-Z, 0-9`. Создайте `GeneratorFactoryService(n: number)` который будет предоставлять сгенереную строку. Зарегистрируйте его используя `useFactory`.

**26.** Создайте или используйте ранее созданный `CoreModule` и зарегистриуйте в нем сервисы. Подключите модуль к приложению.

**27.** Создайте демо-компонент `AboutComponent` (components/about.component.ts) и внедрите перечисленные выше сервисы. Используйте декоратор `@Optional()`.

**28.** Создайте директиву в shared/directives/, которая добавляет обработчик события `click` к хост элементу. 
Клик изменяет размер шрифта элемента. Добавьте `@Input()` для директивы. Используйте `ElementRef/Renderer2`.

**29.** Модифицируйте сервис `CartService` (cart.service.ts), который должен содержать данные корзины интернет магазина и управлять содержимым. Сервис должен хранить информацию:

	- о добавленных товарах в корзину
	- общее количество товаров в корзине
	- общую сумму товаров в корзине

Сервис должен предоставлять следующий функционал:

	- добавить в корзину товар с количеством
	- удалить указанный товар из корзины
	- увеличить/уменьшить количество для указаного товара
	- очистить корзину
	- пересчитать общее количество товара и сумму после каждой операции, которая влияет на корзину

**30.** Применены встроенные пайпы: для форматирования цены, для форматирования в верхний/нижний регистр, для форматирования текущей даты (см. `AboutComponent`, `ProductComponent`, `CartItemComponent`, `CartComponent`).

**31.** Изменен метод `getProducts()` сервиса `ProductService` так, чтобы он возвращал Observable. Применен `async` пайп для отображения данных, предоставленных сервисом `ProductService` на странице.

**32.** Создан `OrderByPipe` для сортировки массива объектов. Пайп принимает два параметра:

	- поле в виде строки, по которому необходимо сортировать массив объектов
	- булевый флаг, который определяет порядок сортировки (по умолчанию сортировка по убыванию)

**33.** Зарегистрирован `OrderByPipe` в `SharedModule`. Применен в приложении для сортировки товаров корзины по `id`, названию (`name`) и цене (`price`).

**34.** Реализован роутинг для перехода между компонентами `ProductListComponent`, `AboutComponent`, `CartComponent`, `ProductListComponent`. Роутинг для `ProductListComponent` вынесен в отдельный модуль.

**35.** Реализовано отображение отзыва о товаре при переходе на `/product/:productID`.

**36.** Создан вспомогательный `router-outlet` для отображения всех отзывов о товарах.

**37.** Реализован вложенный роутинг при переходе на `/product/:productID`.

**38.** Реализована `Admin Feature Area` и защищена с помощью `canActivate Guard`.

**39.** Применен `Resolve Guard` для получения отзыва о конкретном товаре.

**40.** Реализован бекэнд для проекта с использованием `json-server`.

**41.** Созданы сервисы `ProductPromiseService` и `ProductObservableService` для работы с `HttpClient`.

**42.** Применен `ProductPromiseService` при получении данных в `ProductListComponent` и `CartService`.

**43.** Применен `ProductObservableService` при получении данных в `ReviewsComponent` и `ProductResolveGuard`.

**44.** Реализован `TimingInterceptor`, который выводит в консоль длительность запросов, содержащих `products` в урле.

**45**. Внедрены `@ngrx/store`, `@ngrx/effects`. Описан стейт функциональной области (`Products`) и стейт приложения. Описаны действия и редюсер. Созданы эффекты для работы с источником данных.
