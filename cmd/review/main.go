package main

import (
	"context"

	"github.com/your-username/devdive/internal/cli"
)

func main() {
	cli.MainBinary("review", func(ctx context.Context, args []string) error {
		statePath, err := cli.ParseStateFlag("review", args)
		if err != nil {
			return err
		}
		return cli.ExecuteReview(ctx, statePath)
	})
}
