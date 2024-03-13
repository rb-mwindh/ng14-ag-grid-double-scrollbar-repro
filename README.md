# Ng14AgGridPositionBugRepro

This project is meant to reproduce an issue with AG Grid 31.1.x and Angular 14.

## Problem description

The issue at hand involves the use of AG Grid within a custom scroll viewport,
e.g., a `<main>` element styled with `height: 100vh` and `overflow: auto`.

In certain circumstances, this setup results in the appearance of **double scrollbars**.
This issue has been observed in both **Google Chrome** and **Microsoft Edge**.

**Firefox does not seem to be affected**

## How to reproduce

The problem arises when the AG Grid element is rendered far down the page,
beyond the visible top of the screen.
It can be reproduced by adjusting the viewport height,
which can be done by scaling the developer tools bottom bar.

Interestingly, the issue disappears when the **scroll container is given a relative position** (`position: relative`).

The root cause of this behavior appears to be the `.ag-aria-description-container` div,
which is positioned absolutely.
This absolute positioning seems to interfere with the scroll behavior,
leading to the double scrollbar issue.

https://github.com/rb-mwindh/ng14-ag-grid-double-scrollbar-repro/assets/44254831/892c8b90-9a4c-4f67-b768-cd1b1b3a8070
