import { SILENT_MANAGEMENT_FLAGS } from "./constants.js";
import { spawnPointFx, spawnTravelFx } from "./effects.js";
import { whisperSender, whisperSenderError } from "./messages.js";

/**
 * Validates selection and resolves the two tokens targeted for swapping.
 *
 * @param {object} msg Roll20 chat message object.
 * @returns {Array<object>|null} Two graphic token objects or null when invalid.
 */
export function getSelectedTokens(msg) {
  const selectedCount = (msg.selected || []).length;

  if (selectedCount !== 2) {
    const isSilent = SILENT_MANAGEMENT_FLAGS.some((flag) => flag.test(msg.content));
    if (!isSilent) {
      whisperSenderError(
        msg,
        `Please select exactly two tokens to perform a swap. (Currently selected: ${selectedCount})`,
        "Selection Error",
      );
    }
    return null;
  }

  const token1 = getObj("graphic", msg.selected[0]._id);
  const token2 = getObj("graphic", msg.selected[1]._id);

  if (!token1 || !token2) {
    whisperSenderError(msg, "One or both selected tokens could not be found.");
    return null;
  }

  return [token1, token2];
}

/**
 * Swaps token coordinates, verifies the result, and spawns destination FX.
 *
 * @param {object} token1 First token object.
 * @param {object} token2 Second token object.
 * @param {{left:number, top:number, page:string}} pos1 Original position for token1.
 * @param {{left:number, top:number, page:string}} pos2 Original position for token2.
 * @param {string} destinationFx FX to spawn at destination points.
 * @param {object} msg Roll20 chat message object.
 * @returns {void}
 */
export function performSwap(token1, token2, pos1, pos2, destinationFx, msg) {
  token1.set({ left: pos2.left, top: pos2.top });
  token2.set({ left: pos1.left, top: pos1.top });

  const isVerified = token1.get("left") === pos2.left && token2.get("left") === pos1.left;

  if (isVerified) {
    spawnPointFx(pos2.left, pos2.top, destinationFx, pos2.page);
    spawnPointFx(pos1.left, pos1.top, destinationFx, pos1.page);
    whisperSender(
      msg,
      `<strong>Swap Successful!</strong><br>${token1.get("name") || "Token 1"} &harr; ${token2.get("name") || "Token 2"}`,
      "Success",
    );
  } else {
    whisperSenderError(msg, "Token swap failed verification.");
  }
}

/**
 * Executes staged FX before performing the final swap.
 *
 * @param {object} config Effective swap configuration.
 * @param {object} token1 First token object.
 * @param {object} token2 Second token object.
 * @param {{left:number, top:number, page:string}} pos1 Original position for token1.
 * @param {{left:number, top:number, page:string}} pos2 Original position for token2.
 * @param {object} msg Roll20 chat message object.
 * @returns {void}
 */
export function executeSwapPipeline(config, token1, token2, pos1, pos2, msg) {
  const {
    originFx,
    travelFx,
    destinationFx,
    originTime,
    travelTime,
    swapDelay,
    destinationDelay,
  } = config;

  const msBeforeTravel = (originTime + swapDelay) * 1000;
  const msBeforeSwap = (travelTime + destinationDelay) * 1000;

  spawnPointFx(pos1.left, pos1.top, originFx, pos1.page);
  spawnPointFx(pos2.left, pos2.top, originFx, pos2.page);

  setTimeout(() => {
    spawnTravelFx(pos1, pos2, travelFx);

    setTimeout(() => {
      performSwap(token1, token2, pos1, pos2, destinationFx, msg);
    }, msBeforeSwap);
  }, msBeforeTravel);
}
