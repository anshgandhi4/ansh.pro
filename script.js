/*
 * Copyright © 2022 Ansh Gandhi
 *
 * This file is part of Ansh Gandhi's personal website.
 *
 * Ansh Gandhi's personal website is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * Ansh Gandhi's personal website is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with Ansh Gandhi's personal website. If not, see <https://www.gnu.org/licenses/>.
 *
 * Original Author: Ansh Gandhi
 * Original Source Code: <https://github.com/anshgandhi4/ansh.pro>
 * Original Website: <https://www.ansh.pro>
 *
 * EVERYTHING ABOVE THIS LINE MUST BE KEPT AS IS UNDER GNU GPL LICENSE RULES.
 */

document.querySelectorAll('.menu-item').forEach(item => {
    item.addEventListener('mouseover', e => {
        item.style.color = 'rgb(255, 255, 255)';
    })
});

document.querySelectorAll('.menu-item').forEach(item => {
    item.addEventListener('mouseout', e => {
        item.style.color = 'rgb(235, 235, 235)';
    })
});

document.querySelectorAll('.icon').forEach(item => {
    item.addEventListener('mouseover', e => {
        var paths = item.contentDocument.getElementsByClassName('icon');
        for (var i = 0; i < paths.length; i++) {
            paths[i].style.fill = 'rgb(190, 190, 190)';
        }
    })
});

document.querySelectorAll('.icon').forEach(item => {
    item.addEventListener('mouseout', e => {
        var paths = item.contentDocument.getElementsByClassName('icon');
        for (var i = 0; i < paths.length; i++) {
            paths[i].style.fill = 'rgb(150, 150, 150)';
        }
    })
});
