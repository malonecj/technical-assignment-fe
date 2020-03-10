import '@fortawesome/fontawesome-free/js/all';

const IconText = (text) => {
  if(!text) {
    return '';
  }
  return `<span class="fa-layers-text fa-inverse" data-fa-transform="rotate--180 shrink-20 down-10" >${text}</span>`;
}

const WeaponIcon = ({ icon, text }) => (
  `<span class="fa-stack fa-7x">
  <i class="fas fa-circle fa-stack-2x"></i>
  <i class="fas fa-${icon.toLowerCase()} fa-stack-1x fa-inverse"></i>
  ${IconText(text)}
</span>`
);

export default WeaponIcon;
