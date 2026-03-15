package main

import (
	"context"

	"github.com/your-username/devdive/internal/cli"
)

func main() {
	cli.MainBinary("priorities", func(ctx context.Context, args []string) error {
		statePath, err := cli.ParseStateFlag("priorities", args)
		if err != nil {
			return err
		}
		return cli.ExecutePriorities(ctx, statePath)
	})
}
