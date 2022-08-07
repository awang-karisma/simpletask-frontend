import { c as create_ssr_component, g as compute_rest_props, h as spread, i as escape_attribute_value, j as escape_object, k as createEventDispatcher, b as escape, v as validate_component, e as each, d as add_attribute, a as subscribe, n as noop } from "../../_app/immutable/chunks/index-f4973d25.js";
import { w as writable } from "../../_app/immutable/chunks/index-ae97d16e.js";
const Pencil = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["size", "color", "variation", "ariaLabel"]);
  let { size = "24" } = $$props;
  let { color = "currentColor" } = $$props;
  let { variation = "outline" } = $$props;
  let viewBox;
  let svgpath;
  let svgoutline = `<path d="M15.2322 5.23223L18.7677 8.76777M16.7322 3.73223C17.7085 2.75592 19.2914 2.75592 20.2677 3.73223C21.244 4.70854 21.244 6.29146 20.2677 7.26777L6.5 21.0355H3V17.4644L16.7322 3.73223Z" stroke="${color}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/> `;
  let svgsolid = ` <path d="M13.5858 3.58579C14.3668 2.80474 15.6332 2.80474 16.4142 3.58579C17.1953 4.36683 17.1953 5.63316 16.4142 6.41421L15.6213 7.20711L12.7929 4.37868L13.5858 3.58579Z" fill="${color}"/> <path d="M11.3787 5.79289L3 14.1716V17H5.82842L14.2071 8.62132L11.3787 5.79289Z" fill="${color}"/> `;
  let { ariaLabel = "pencil" } = $$props;
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.variation === void 0 && $$bindings.variation && variation !== void 0)
    $$bindings.variation(variation);
  if ($$props.ariaLabel === void 0 && $$bindings.ariaLabel && ariaLabel !== void 0)
    $$bindings.ariaLabel(ariaLabel);
  {
    switch (variation) {
      case "outline":
        svgpath = svgoutline;
        viewBox = "0 0 24 24";
        break;
      case "solid":
        svgpath = svgsolid;
        viewBox = "0 0 20 20";
        break;
      default:
        svgpath = svgoutline;
        viewBox = "0 0 24 24";
    }
  }
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { width: escape_attribute_value(size) },
      { height: escape_attribute_value(size) },
      {
        class: escape_attribute_value($$props.class)
      },
      escape_object($$restProps),
      {
        "aria-label": escape_attribute_value(ariaLabel)
      },
      { fill: "none" },
      { viewBox: escape_attribute_value(viewBox) },
      { "stroke-width": "2" }
    ],
    {}
  )}><!-- HTML_TAG_START -->${svgpath}<!-- HTML_TAG_END --></svg>`;
});
const PlusCircle = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["size", "color", "variation", "ariaLabel"]);
  let { size = "24" } = $$props;
  let { color = "currentColor" } = $$props;
  let { variation = "outline" } = $$props;
  let viewBox;
  let svgpath;
  let svgoutline = `<path d="M12 9V12M12 12V15M12 12H15M12 12H9M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="${color}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/> `;
  let svgsolid = ` <path fill-rule="evenodd" clip-rule="evenodd" d="M10 18C14.4183 18 18 14.4183 18 10C18 5.58172 14.4183 2 10 2C5.58172 2 2 5.58172 2 10C2 14.4183 5.58172 18 10 18ZM11 7C11 6.44772 10.5523 6 10 6C9.44772 6 9 6.44772 9 7V9H7C6.44772 9 6 9.44771 6 10C6 10.5523 6.44772 11 7 11H9V13C9 13.5523 9.44772 14 10 14C10.5523 14 11 13.5523 11 13V11H13C13.5523 11 14 10.5523 14 10C14 9.44772 13.5523 9 13 9H11V7Z" fill="${color}"/> `;
  let { ariaLabel = "plus circle" } = $$props;
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.variation === void 0 && $$bindings.variation && variation !== void 0)
    $$bindings.variation(variation);
  if ($$props.ariaLabel === void 0 && $$bindings.ariaLabel && ariaLabel !== void 0)
    $$bindings.ariaLabel(ariaLabel);
  {
    switch (variation) {
      case "outline":
        svgpath = svgoutline;
        viewBox = "0 0 24 24";
        break;
      case "solid":
        svgpath = svgsolid;
        viewBox = "0 0 20 20";
        break;
      default:
        svgpath = svgoutline;
        viewBox = "0 0 24 24";
    }
  }
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { width: escape_attribute_value(size) },
      { height: escape_attribute_value(size) },
      {
        class: escape_attribute_value($$props.class)
      },
      escape_object($$restProps),
      {
        "aria-label": escape_attribute_value(ariaLabel)
      },
      { fill: "none" },
      { viewBox: escape_attribute_value(viewBox) },
      { "stroke-width": "2" }
    ],
    {}
  )}><!-- HTML_TAG_START -->${svgpath}<!-- HTML_TAG_END --></svg>`;
});
const Refresh = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["size", "color", "variation", "ariaLabel"]);
  let { size = "24" } = $$props;
  let { color = "currentColor" } = $$props;
  let { variation = "outline" } = $$props;
  let viewBox;
  let svgpath;
  let svgoutline = `<path d="M4 4V9H4.58152M19.9381 11C19.446 7.05369 16.0796 4 12 4C8.64262 4 5.76829 6.06817 4.58152 9M4.58152 9H9M20 20V15H19.4185M19.4185 15C18.2317 17.9318 15.3574 20 12 20C7.92038 20 4.55399 16.9463 4.06189 13M19.4185 15H15" stroke="${color}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/> `;
  let svgsolid = `<path fill-rule="evenodd" clip-rule="evenodd" d="M4 2C4.55228 2 5 2.44772 5 3V5.10125C6.27009 3.80489 8.04052 3 10 3C13.0494 3 15.641 4.94932 16.6014 7.66675C16.7855 8.18747 16.5126 8.75879 15.9918 8.94284C15.4711 9.12689 14.8998 8.85396 14.7157 8.33325C14.0289 6.38991 12.1755 5 10 5C8.36507 5 6.91204 5.78502 5.99935 7H9C9.55228 7 10 7.44772 10 8C10 8.55228 9.55228 9 9 9H4C3.44772 9 3 8.55228 3 8V3C3 2.44772 3.44772 2 4 2ZM4.00817 11.0572C4.52888 10.8731 5.1002 11.146 5.28425 11.6668C5.97112 13.6101 7.82453 15 10 15C11.6349 15 13.088 14.215 14.0006 13L11 13C10.4477 13 10 12.5523 10 12C10 11.4477 10.4477 11 11 11H16C16.2652 11 16.5196 11.1054 16.7071 11.2929C16.8946 11.4804 17 11.7348 17 12V17C17 17.5523 16.5523 18 16 18C15.4477 18 15 17.5523 15 17V14.8987C13.7299 16.1951 11.9595 17 10 17C6.95059 17 4.35905 15.0507 3.39857 12.3332C3.21452 11.8125 3.48745 11.2412 4.00817 11.0572Z" fill="${color}"/> `;
  let { ariaLabel = "refresh" } = $$props;
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.variation === void 0 && $$bindings.variation && variation !== void 0)
    $$bindings.variation(variation);
  if ($$props.ariaLabel === void 0 && $$bindings.ariaLabel && ariaLabel !== void 0)
    $$bindings.ariaLabel(ariaLabel);
  {
    switch (variation) {
      case "outline":
        svgpath = svgoutline;
        viewBox = "0 0 24 24";
        break;
      case "solid":
        svgpath = svgsolid;
        viewBox = "0 0 20 20";
        break;
      default:
        svgpath = svgoutline;
        viewBox = "0 0 24 24";
    }
  }
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { width: escape_attribute_value(size) },
      { height: escape_attribute_value(size) },
      {
        class: escape_attribute_value($$props.class)
      },
      escape_object($$restProps),
      {
        "aria-label": escape_attribute_value(ariaLabel)
      },
      { fill: "none" },
      { viewBox: escape_attribute_value(viewBox) },
      { "stroke-width": "2" }
    ],
    {}
  )}><!-- HTML_TAG_START -->${svgpath}<!-- HTML_TAG_END --></svg>`;
});
const Trash = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["size", "color", "variation", "ariaLabel"]);
  let { size = "24" } = $$props;
  let { color = "currentColor" } = $$props;
  let { variation = "outline" } = $$props;
  let viewBox;
  let svgpath;
  let svgoutline = `<path d="M19 7L18.1327 19.1425C18.0579 20.1891 17.187 21 16.1378 21H7.86224C6.81296 21 5.94208 20.1891 5.86732 19.1425L5 7M10 11V17M14 11V17M15 7V4C15 3.44772 14.5523 3 14 3H10C9.44772 3 9 3.44772 9 4V7M4 7H20" stroke="${color}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/> `;
  let svgsolid = ` <path fill-rule="evenodd" clip-rule="evenodd" d="M9 2C8.62123 2 8.27497 2.214 8.10557 2.55279L7.38197 4H4C3.44772 4 3 4.44772 3 5C3 5.55228 3.44772 6 4 6L4 16C4 17.1046 4.89543 18 6 18H14C15.1046 18 16 17.1046 16 16V6C16.5523 6 17 5.55228 17 5C17 4.44772 16.5523 4 16 4H12.618L11.8944 2.55279C11.725 2.214 11.3788 2 11 2H9ZM7 8C7 7.44772 7.44772 7 8 7C8.55228 7 9 7.44772 9 8V14C9 14.5523 8.55228 15 8 15C7.44772 15 7 14.5523 7 14V8ZM12 7C11.4477 7 11 7.44772 11 8V14C11 14.5523 11.4477 15 12 15C12.5523 15 13 14.5523 13 14V8C13 7.44772 12.5523 7 12 7Z" fill="${color}"/> `;
  let { ariaLabel = "trash" } = $$props;
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.variation === void 0 && $$bindings.variation && variation !== void 0)
    $$bindings.variation(variation);
  if ($$props.ariaLabel === void 0 && $$bindings.ariaLabel && ariaLabel !== void 0)
    $$bindings.ariaLabel(ariaLabel);
  {
    switch (variation) {
      case "outline":
        svgpath = svgoutline;
        viewBox = "0 0 24 24";
        break;
      case "solid":
        svgpath = svgsolid;
        viewBox = "0 0 20 20";
        break;
      default:
        svgpath = svgoutline;
        viewBox = "0 0 24 24";
    }
  }
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { width: escape_attribute_value(size) },
      { height: escape_attribute_value(size) },
      {
        class: escape_attribute_value($$props.class)
      },
      escape_object($$restProps),
      {
        "aria-label": escape_attribute_value(ariaLabel)
      },
      { fill: "none" },
      { viewBox: escape_attribute_value(viewBox) },
      { "stroke-width": "2" }
    ],
    {}
  )}><!-- HTML_TAG_START -->${svgpath}<!-- HTML_TAG_END --></svg>`;
});
const TableButton = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  createEventDispatcher();
  let { color = "green" } = $$props;
  let { isLoading = false } = $$props;
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.isLoading === void 0 && $$bindings.isLoading && isLoading !== void 0)
    $$bindings.isLoading(isLoading);
  return `<div><button type="${"submit"}" class="${"rounded-lg bg-" + escape(color, true) + "-300 mx-1 p-1.5"}">${isLoading ? `${validate_component(Refresh, "Refresh").$$render($$result, {}, {}, {})}` : `${slots.default ? slots.default({}) : ``}`}</button></div>`;
});
const Table = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { tableHeader = [] } = $$props;
  createEventDispatcher();
  let { tableData = [[]] } = $$props;
  if ($$props.tableHeader === void 0 && $$bindings.tableHeader && tableHeader !== void 0)
    $$bindings.tableHeader(tableHeader);
  if ($$props.tableData === void 0 && $$bindings.tableData && tableData !== void 0)
    $$bindings.tableData(tableData);
  return `<div class="${"relative overflow-x-auto shadow-md sm:rounded-lg"}"><table class="${"w-full text-left text-sm text-gray-500 dark:text-gray-400"}"><thead class="${"bg-gray-50 text-xs uppercase text-gray-700 dark:bg-gray-700 dark:text-gray-400"}"><tr>${tableHeader.length > 0 ? `<th class="${"px-6 py-3"}">No.</th>
          ${each(tableHeader, (th) => {
    return `<th class="${"px-6 py-3"}">${escape(th)}</th>`;
  })}
          <th class="${"px-6 py-3"}">Action</th>` : `<th class="${"px-6 py-3"}">No Header</th>`}</tr></thead>
    <tbody>${tableData.length > 0 ? `${each(tableData, (td, index) => {
    return `<tr class="${"bg-white odd:bg-white even:bg-gray-50 hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 odd:dark:bg-gray-800 even:dark:bg-gray-700 dark:hover:bg-gray-600"}"><td class="${"whitespace-nowrap px-6 py-4 font-medium text-gray-900 dark:text-white"}">${escape(index + 1)}</td>
            ${each(td, (key) => {
      return `<td class="${"whitespace-nowrap px-6 py-4 font-medium text-gray-900 dark:text-white"}">${escape(key)}
              </td>`;
    })}
            <td class="${"whitespace-nowrap px-6 py-4 font-medium text-gray-900 dark:text-white"}"><div class="${"flex flex-row"}">
                ${validate_component(TableButton, "TableButton").$$render($$result, { color: "green", isLoading: false }, {}, {
      default: () => {
        return `${validate_component(Pencil, "Pencil").$$render($$result, {}, {}, {})}
                `;
      }
    })}
                
                
                ${validate_component(TableButton, "TableButton").$$render($$result, { color: "red", isLoading: false }, {}, {
      default: () => {
        return `${validate_component(Trash, "Trash").$$render($$result, {}, {}, {})}
                `;
      }
    })}
                
              </div></td>
          </tr>`;
  })}` : `<tr class="${"bg-white odd:bg-white even:bg-gray-50 hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 odd:dark:bg-gray-800 even:dark:bg-gray-700 dark:hover:bg-gray-600"}"><td class="${"whitespace-nowrap px-6 py-4 font-medium text-gray-900 dark:text-white"}">No Data
          </td></tr>`}</tbody></table></div>`;
});
const Modal = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  createEventDispatcher();
  let { mode = "add" } = $$props;
  let { data = writable() } = $$props;
  let { isOpen = false } = $$props;
  let formName;
  let formTask;
  let formAsignee;
  let formDue;
  let formDone;
  data.subscribe((value) => {
    formName = value.name;
    formTask = value.task;
    formAsignee = value.assignee;
    formDue = value.due;
    formDone = value.done;
  });
  if ($$props.mode === void 0 && $$bindings.mode && mode !== void 0)
    $$bindings.mode(mode);
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  if ($$props.isOpen === void 0 && $$bindings.isOpen && isOpen !== void 0)
    $$bindings.isOpen(isOpen);
  return `
<div id="${"authentication-modal"}" tabindex="${"-1"}" class="${"fixed top-0 right-0 left-0 z-50 flex h-full w-full flex-col items-center overflow-y-auto overflow-x-hidden bg-black bg-opacity-60 backdrop-blur-sm"}">
  <div class="${"absolute top-1/3 h-fit w-full -translate-y-1/2 p-4 sm:w-3/4 md:w-1/2 xl:w-1/3"}">
    <div class="${"relative rounded-lg bg-white shadow dark:bg-gray-700"}"><div class="${"py-6 px-6 lg:px-8"}"><h3 class="${"mb-4 text-xl font-medium text-gray-900 dark:text-white"}">${mode === "add" ? `Add New Task` : `${mode === "edit" ? `Edit Task` : `${mode === "delete" ? `Delete Task` : ``}`}`}</h3>
        <form class="${"space-y-6"}" action="${"#"}"><div><label for="${"taskName"}" class="${"mb-2 block text-sm font-medium text-gray-900 dark:text-gray-300"}">Task name
            </label>
            <input type="${"text"}" name="${"taskName"}" class="${"block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-500 dark:bg-gray-600 dark:text-white dark:placeholder-gray-400"}" placeholder="${"Put meaningful task here..."}" required ${mode === "delete" ? "disabled" : ""}${add_attribute("value", formName, 0)}></div>
          <div><label for="${"taskDetail"}" class="${"mb-2 block text-sm font-medium text-gray-900 dark:text-gray-300"}">Task details
            </label>
            <input type="${"text"}" name="${"taskDetail"}" class="${"block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-500 dark:bg-gray-600 dark:text-white dark:placeholder-gray-400"}" placeholder="${"Put meaningful task here..."}" required ${mode === "delete" ? "disabled" : ""}${add_attribute("value", formTask, 0)}></div>
          <div><label for="${"assignee"}" class="${"mb-2 block text-sm font-medium text-gray-900 dark:text-gray-300"}">Assignee
            </label>
            <input type="${"text"}" name="${"assignee"}" class="${"block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-500 dark:bg-gray-600 dark:text-white dark:placeholder-gray-400"}" placeholder="${"Who are going to do this task?"}" required ${mode === "delete" ? "disabled" : ""}${add_attribute("value", formAsignee, 0)}></div>
          <div><label for="${"due"}" class="${"mb-2 block text-sm font-medium text-gray-900 dark:text-gray-300"}">Due date
            </label>
            <input type="${"text"}" name="${"due"}" class="${"block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-500 dark:bg-gray-600 dark:text-white dark:placeholder-gray-400"}" placeholder="${"Deadline!"}" required ${mode === "delete" ? "disabled" : ""}${add_attribute("value", formDue, 0)}></div>
          <div><label for="${"isDone"}" class="${"mb-2 block text-sm font-medium text-gray-900 dark:text-gray-300"}">Done
            </label>
            <input type="${"text"}" name="${"isDone"}" class="${"block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-500 dark:bg-gray-600 dark:text-white dark:placeholder-gray-400"}" placeholder="${"Done?"}" required ${mode === "delete" ? "disabled" : ""}${add_attribute("value", formDone, 0)}></div>
          <div class="${"flex justify-between"}"><div class="${"flex items-start"}"><div class="${"flex h-5 items-center"}"><input id="${"remember"}" type="${"checkbox"}" value="${""}" class="${"focus:ring-3 h-4 w-4 rounded border border-gray-300 bg-gray-50 focus:ring-blue-300 dark:border-gray-500 dark:bg-gray-600 dark:ring-offset-gray-800 dark:focus:ring-blue-600"}" required></div>
              <label for="${"remember"}" class="${"ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"}">Remember me
              </label></div>
            <a href="${"/"}" class="${"text-sm text-blue-700 hover:underline dark:text-blue-500"}">Lost Password?
            </a></div>
          <div class="${"flex justify-end space-x-2"}"><button type="${"submit"}" class="${"w-fit rounded-lg bg-" + escape(mode === "delete" ? "red" : "blue", true) + "-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300"}">${escape(mode === "delete" ? "Delete" : "Save")}</button>
            <button class="${"w-fit rounded-lg bg-red-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300"}">Cancel
            </button></div></form></div></div></div>
  </div>`;
});
const Routes = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $isModalVisible, $$unsubscribe_isModalVisible;
  let $$unsubscribe_modalData = noop, $$subscribe_modalData = () => ($$unsubscribe_modalData(), $$unsubscribe_modalData = subscribe(modalData, ($$value) => $$value), modalData);
  const tableHeader = ["Task Name", "Task Detail", "Assignee", "Due Date", "Done"];
  const tableData = [
    ["test", "Tugas", "saya", Date.now().toString(), "false"],
    ["test", "Tugas", "saya", Date.now().toString(), "false"],
    ["test", "Tugas", "saya", Date.now().toString(), "false"],
    ["test", "Tugas", "saya", Date.now().toString(), "false"]
  ];
  let isModalVisible = writable(false);
  $$unsubscribe_isModalVisible = subscribe(isModalVisible, (value) => $isModalVisible = value);
  let modalData = writable();
  $$subscribe_modalData();
  let modalMode;
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `<div class="${"flex flex-col"}"><div class="${"flex justify-end"}"><button class="${"my-3 inline-flex w-full items-center rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 sm:w-auto"}">${validate_component(PlusCircle, "PlusCircle").$$render($$result, { class: "mr-2" }, {}, {})}
      Add New
    </button></div>
  ${$isModalVisible ? `${validate_component(Modal, "Modal").$$render(
      $$result,
      {
        mode: modalMode,
        data: modalData,
        isOpen: $isModalVisible
      },
      {
        data: ($$value) => {
          modalData = $$value;
          $$settled = false;
        },
        isOpen: ($$value) => {
          $isModalVisible = $$value;
          $$settled = false;
        }
      },
      {}
    )}` : ``}
  ${validate_component(Table, "Table").$$render($$result, { tableHeader, tableData }, {}, {})}</div>`;
  } while (!$$settled);
  $$unsubscribe_isModalVisible();
  $$unsubscribe_modalData();
  return $$rendered;
});
export {
  Routes as default
};
