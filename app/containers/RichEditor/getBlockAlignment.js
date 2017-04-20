export default function getBlockAlignment(block) {
  let style = 'left';
  block.findStyleRanges(function(e) {
    if (e.hasStyle('center')) style = 'center';
    if (e.hasStyle('right')) style = 'right';
  });
  return style;
}