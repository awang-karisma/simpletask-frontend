import { c as create_ssr_component, a as subscribe, e as each, b as escape, d as add_attribute, v as validate_component } from "../../_app/immutable/chunks/index-f4973d25.js";
import { w as writable } from "../../_app/immutable/chunks/index-ae97d16e.js";
const app = "";
const Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $activeMenu, $$unsubscribe_activeMenu;
  let $isUserMenuOpen, $$unsubscribe_isUserMenuOpen;
  let isUserMenuOpen = writable(false);
  $$unsubscribe_isUserMenuOpen = subscribe(isUserMenuOpen, (value) => $isUserMenuOpen = value);
  let activeMenu = writable("Home");
  $$unsubscribe_activeMenu = subscribe(activeMenu, (value) => $activeMenu = value);
  let navigationLinks = [{ name: "Home", href: "#" }, { name: "About", href: "#" }];
  $$unsubscribe_activeMenu();
  $$unsubscribe_isUserMenuOpen();
  return `
<nav class="${"bg-white"}"><div class="${"mx-auto max-w-7xl px-2 sm:px-6 lg:px-8"}"><div class="${"relative flex h-16 items-center justify-between"}"><div class="${"flex flex-1 items-stretch justify-start"}"><div class="${"flex flex-shrink-0 items-center"}"><img class="${"block h-8 w-auto"}" src="${"https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"}" alt="${"Workflow"}"></div>
        <div class="${"sm:ml-6"}"><div class="${"flex space-x-4"}">
            ${each(navigationLinks, (navigationLink) => {
    return `<a${add_attribute("href", navigationLink.href, 0)} class="${escape(
      $activeMenu === navigationLink.name ? "bg-gray-900 text-white" : "text-black hover:text-white",
      true
    ) + " rounded-md px-3 py-2 text-sm font-medium hover:bg-gray-700"}" aria-current="${"page"}">${escape(navigationLink.name)}
              </a>`;
  })}</div></div></div>
      <div class="${"absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0"}">
        <div class="${"relative ml-3"}"><div><button type="${"button"}" class="${"flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"}" id="${"user-menu-button"}" aria-expanded="${"false"}" aria-haspopup="${"true"}"><span class="${"sr-only"}">Open user menu</span>
              <img class="${"h-8 w-8 rounded-full"}" src="${"images/fotoprofil.jpg"}" alt="${""}"></button></div>

          
          <div class="${escape($isUserMenuOpen ? "" : "hidden", true) + " absolute right-0 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"}" role="${"menu"}" aria-orientation="${"vertical"}" aria-labelledby="${"user-menu-button"}" tabindex="${"-1"}">
            <a href="${"#"}" class="${"block px-4 py-2 text-sm text-gray-700"}" role="${"menuitem"}" tabindex="${"-1"}" id="${"user-menu-item-0"}">Your Profile
            </a>
            <a href="${"#"}" class="${"block px-4 py-2 text-sm text-gray-700"}" role="${"menuitem"}" tabindex="${"-1"}" id="${"user-menu-item-1"}">Settings
            </a>
            <a href="${"#"}" class="${"block px-4 py-2 text-sm text-gray-700"}" role="${"menuitem"}" tabindex="${"-1"}" id="${"user-menu-item-2"}">Sign out
            </a></div></div></div></div></div></nav>`;
});
const _layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Header, "Header").$$render($$result, {}, {}, {})}

<body><div class="${"mx-auto my-0 max-w-7xl px-2 sm:px-6 lg:px-8"}">${slots.default ? slots.default({}) : ``}</div></body>`;
});
export {
  _layout as default
};
