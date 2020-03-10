import '@fortawesome/fontawesome-free/js/all';

const WeaponIcon = ({ icon, text }) => (
  `<span class="fa-stack fa-7x">
  <i class="fas fa-circle fa-stack-2x"></i>
  <i class="fas fa-${icon.toLowerCase()} fa-stack-1x fa-inverse"></i>
  <span class="fa-layers-text fa-inverse" data-fa-transform="rotate--180 shrink-20 down-10" >${text}</span>
</span>`
);

export default WeaponIcon;
