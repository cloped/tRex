/**
 * Module dependencies
 */

// ...


/**
 * view-sobre.js
 *
 * Display "Sobre" page.
 */
module.exports = async function viewSobre(req, res) {
  const released = 2018;
  return res.view('pages/sobre', { released: released });

};
